import { HTMLAttributes } from "react"; 

interface Props {
    primary?: boolean;
    error?: boolean
}

export interface ButtonProps extends HTMLAttributes<HTMLDivElement>, Props  {}