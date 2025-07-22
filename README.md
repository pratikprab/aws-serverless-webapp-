# Serverless Web Application on AWS

## Project Name: Serverless View Counter Application

### Project Description

This project is a **serverless web application** built using **AWS Lambda (Node.js 22.x)**, **DynamoDB**, **S3**, and **CloudFront**. The application displays a greeting form and dynamically updates the **view count** stored in DynamoDB every time the page is visited.

### Project Architecture

![Serverless Web Application Architecture](https://user-images.githubusercontent.com/66474973/228492073-5cd3d975-3439-4ce4-b109-fb33997df3c3.png)

### Key Implementation Steps

✅ Created a DynamoDB table to store view counts  
✅ Built a Lambda function (Node.js) to handle **update and fetch operations** for view count  
✅ Hosted static files (HTML, CSS, JS) on an **S3 bucket with public hosting**  
✅ Configured **CloudFront distribution** for secure and low latency delivery  
✅ Implemented **CORS headers** in Lambda to allow cross-origin requests from CloudFront

---

### Expected Outcome

✔ **Working serverless web application** accessible globally via CloudFront  
✔ **View counter updates dynamically** every time the site is visited  
✔ Hands-on experience in:

- AWS Lambda Function URLs and CORS configuration  
- DynamoDB integration with Lambda (Node.js SDK v3)  
- Hosting static websites on S3 with CloudFront  
- End-to-end deployment of serverless architecture

---

### Technologies Used

- **AWS Lambda (Node.js 22.x)**
- **Amazon DynamoDB**
- **Amazon S3**
- **Amazon CloudFront**
- **JavaScript (Fetch API)**


---

### Further Improvements

🔜 Potential future additions:

- API Gateway integration for RESTful expansion  
- Authentication with Cognito for user-specific data  
- Terraform or AWS SAM for infrastructure as code deployment

---

