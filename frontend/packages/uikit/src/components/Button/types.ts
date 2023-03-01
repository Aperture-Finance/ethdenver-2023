import { HTMLAttributes } from "react"; 

interface Props{
    error?: boolean
}

export interface ButtonProps extends HTMLAttributes<HTMLDivElement>, Props  {}