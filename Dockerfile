# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies (for MySQL client & other libraries)
RUN apt-get update && apt-get install -y \
    gcc \
    pkg-config \
    default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY . .

RUN mkdir -p /app/files

# Expose Flask port
EXPOSE 5000

# Set environment variables (defaults, can be overridden in docker-compose.yml)
ENV FLASK_APP=app.py \
    FLASK_RUN_HOST=0.0.0.0 \
    UPLOAD_FOLDER=files

# Run Flask
CMD ["python3", "app.py"]
