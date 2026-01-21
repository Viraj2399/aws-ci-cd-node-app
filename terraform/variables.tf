variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "ami_id" {
  default = "ami-0b6c6ebed2801a5cb"
}

variable "key_name" {
  type = string
}
