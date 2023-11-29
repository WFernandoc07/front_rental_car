export const transforDate = (date) => {
    const dateNormal = new Date(date)
    return dateNormal.toISOString().split('T')[0]
}
export const formatoIso = (date) => {
    const fechaIso = new Date(`${date}T03:44:36.669Z`).toISOString();
    return fechaIso
}