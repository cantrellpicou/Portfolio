FROM python:3.13

RUN mkdir /app
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1 
RUN pip install --upgrade pip 
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["sh", "-c", "python3 manage.py migrate --noinput && \
                  python3 manage.py collectstatic --noinput && \
                  python3 manage.py runserver 0.0.0.0:8000"]
