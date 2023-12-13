import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import NoPic from '../assets/logo/no_pic.jpg'
  import "../Style.css"
  import { Link } from "react-router-dom";
   
  export function HorizontalCard() {
    return (
      
<div className="flex justify-center items-center h-full">
  
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={NoPic}
            alt="card-image"
            className="NoPic"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h10" color="gray" className="mb-4 uppercase">
            Name:
          </Typography>
          <Typography variant="h10" color="gray" className="mb-4 uppercase">
            Contact:
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Description:
          </Typography>
          <Link to='/profile'>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
          </Link>
        </CardBody>
      </Card>
</div>
    );
  }