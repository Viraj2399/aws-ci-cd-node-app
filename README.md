# AWS CI/CD Node.js App

![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![AWS](https://img.shields.io/badge/AWS-EC2-yellow)
![CI/CD](https://img.shields.io/badge/CI--CD-GitHub_Actions-blue)

---

## Project Overview

This project demonstrates a **full DevOps workflow** for a Node.js application deployed on **AWS EC2** using **Terraform and GitHub Actions**.  

It includes:

- **Infrastructure as Code (IaC)**: Provision EC2 instance with Terraform.  
- **Automated CI/CD**: Build, test, and deploy Node.js app via GitHub Actions.  
- **Process Management**: Use PM2 to keep Node.js app running.  
- **Reverse Proxy**: Nginx serves the app on port 80.  

> This project highlights core DevOps skills in **CI/CD, IaC, Deployment Automation, Monitoring, and Infrastructure Management**.

---

## Tech Stack

- Node.js
- PM2
- Nginx
- AWS EC2
- Terraform
- GitHub Actions
- Bash Scripts

---

## Folder Structure

aws-ci-cd-node-app/
│
├─ .github/workflows/ci-cd.yml # GitHub Actions workflow
├─ scripts/deploy.sh # Deployment script
├─ src/
│ └─ index.js # Node.js app entry point
├─ terraform/
│ ├─ main.tf # EC2 provisioning
│ ├─ variables.tf # Variables file
│ └─ outputs.tf # Outputs file
├─ package.json
├─ README.md
└─ ...


---

## Features

- Health endpoint: `/health` → returns `OK`
- Runs continuously in the background with PM2
- Accessible via public IP through Nginx reverse proxy
- Fully automated deployment via GitHub Actions

---

