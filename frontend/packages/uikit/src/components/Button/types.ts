import { HTMLAttributes } from "react"; 

interface Props {
    primary?: boolean;
    error?: boolean
    outline?: boolean;
}

export interface ButtonProps extends HTMLAttributes<HTMLDivElement>, Props  {}