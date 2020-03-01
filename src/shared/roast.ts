export interface Roast {
    id: string;
    name: string;
    variant: string;
    size: number;
    description: string;
    notes: string;
    keywords: string[];
    starttemp: number;
    maintemp: number;
    intervals: number[];
}