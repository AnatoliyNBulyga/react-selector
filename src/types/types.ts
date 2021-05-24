export interface IItem {
    text: string,
    id: number
}
export interface IFile {
    name: string,
    lastModified: number
}
export type ContextType = {
    removeItem: (id: number) => void
}