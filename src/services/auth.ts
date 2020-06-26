interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'd1sad1a9d84as9da94d9s44a9d4as98d49a8s49g9weg',
                user: {
                    name: 'Nome de Usuário',
                    email: 'exemplo@email.com',
                },
            });
        }, 2000);
    });
}