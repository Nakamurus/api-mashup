FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

# for Amplify
# https://docs.amplify.aws/cli/usage/containers#deploy-a-single-container
EXPOSE 80

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY app/ .
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]