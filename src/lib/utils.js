export function formatDate(date) {
    return date.toLocaleDateString('es-ES',{
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}