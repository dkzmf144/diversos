import sqlite3
import bcrypt

def verificar_senha(senha_digitada, hash_armazenado):
    # Codifica a senha e o hash para bytes
    senha_bytes = senha_digitada.encode('utf-8')
    hash_bytes = hash_armazenado.encode('utf-8')
    # Verifica se a senha corresponde ao hash
    return bcrypt.checkpw(senha_bytes, hash_bytes)

def login_usuario(username, senha):
    # Conectando ao banco de dados
    conn = sqlite3.connect('alunos.db')
    cursor = conn.cursor()
    print("Conectado ao Banco de Dados")

    # Buscando os usuários
    cursor.execute('SELECT * FROM usuarios')
    listaUsuarios = cursor.fetchall()

    # Verificando usuário
    for user in listaUsuarios:
        print(f'\nID: {user[0]}')
        print(f'Nome: {user[1]}')
        print(f'Username: {user[2]}')
        print(f'Senha Hash: {user[3]}')

        if user[2] == username:
            hash_armazenado = user[3]
            print("hash_armazenado:", hash_armazenado)

            if verificar_senha(senha, hash_armazenado):
                print(f"\nUsuário '{username}' autenticado com sucesso.")
                conn.close()
                return True
            else:
                print("\nSenha incorreta.")
                conn.close()
                return False

    print("\nUsuário não encontrado.")
    conn.close()
    return False

if __name__ == "__main__":
    username = input("Entre com o usuário: ")
    senha = input("Entre com a senha: ")
    login_usuario(username, senha)
