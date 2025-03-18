export async function getUsers() {
  try {
    return [
      {
        name: 'Gabriel Silveira',
        email: 'gabriel@gabrielsilveira.com.br',
        phone: '+55 11 976768736',
        editor: true,
        master: false,
      },
      {
        name: 'Roberto Pina',
        email: 'roberto@verx.com.br',
        phone: '+55 11 965824478',
        editor: true,
        master: true,
      },
    ];
  } catch (error) {
    console.error(error);
  }
}
