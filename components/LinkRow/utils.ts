export const returnSpace = (num:number) =>{
    const s = `\u00A0`

   return Array(num + 1).join(s)
}