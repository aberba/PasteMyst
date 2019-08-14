export function getJwt (): string
{
    const jwtCookie: string = getCookie ("github");

    if (jwtCookie !== null)
    {
        return jwtCookie;
    }
    else
    {
        return "";
    }
}

export function getCookie (name: string): string
{
    const nameEQ: string = name + "=";
    const cookies: string [] = document.cookie.split(";");
    
    for (let i: number = 0; i < cookies.length; i++)
    {
        let cookie: string = cookies [i];
        
        while (cookie.charAt (0) === " ")
        {
            cookie = cookie.substring (1, cookie.length);
        }

        if (cookie.indexOf (nameEQ) === 0)
        {
            return cookie.substring (nameEQ.length, cookie.length);
        }
    }

    return null;
}
