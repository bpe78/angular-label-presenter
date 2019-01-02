export enum DisplayHints {
    None = 0,
    TextSingleLine,
    TextParagraph,
    Icon,
    ImageLink,
    VideoLink
}

export type X = 
    { hint: DisplayHints.None; } |
    { hint: DisplayHints.TextSingleLine; text: string; } |
    { hint: DisplayHints.TextParagraph; text: string; } |
    { hint: DisplayHints.Icon; name: string; } |
    { hint: DisplayHints.ImageLink; url: string; width: number; height: number; } |
    { hint: DisplayHints.TextSingleLine; url: string; width: number; height: number; };
    