/***
 * @description converts a datetime string to a human readable date string
 * @param dateString
 */
export const toHumanReadableDate = (dateString: string): string => {
        if(typeof dateString !== "string") return "Invalid Date"
        return new Date(dateString).toLocaleDateString(
            'en-gb',
            {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
            }
        )
}