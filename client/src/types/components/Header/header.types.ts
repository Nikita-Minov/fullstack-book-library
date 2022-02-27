export interface Link {
    name: string;
    url: string;
}

export interface HeaderProps {
    links:Array<Link>
}

export interface LinkProps {
    length: number;
}