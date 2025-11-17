import sqlite3
import bcrypt

# Conectar ao banco de dados
conn = sqlite3.connect('alunos.db')
cursor = conn.cursor()
print("Conectado ao Banco de Dados")

# Criar a tabela 'usuarios' se não existir
try:
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(50) NOT NULL,
            username VARCHAR(50) NOT NULL UNIQUE,
            senha VARCHAR(255) NOT NULL
        );
    ''')
    conn.commit()
except Exception as e:
    print("ERRO na criação da tabela:", e)

conn.close()

# Gera hash seguro para a senha
def gerar_hash_senha(senha):
    senha_bytes = senha.encode('utf-8')
    hashed_senha = bcrypt.hashpw(senha_bytes, bcrypt.gensalt())
    return hashed_senha.decode('utf-8')  # Para salvar como string no banco

# Função para registrar novo usuário
def registrar_user(nome, username, senha):
    conn = sqlite3.connect('alunos.db')
    cursor = conn.cursor()

    print("Conectado ao Banco de Dados")

    # Verifica se o username já existe
    cursor.execute('SELECT * FROM usuarios WHERE username = ?', (username,))
    if cursor.fetchone():
        print("Nome de usuário já existe.")
        conn.close()
        return False

    # Gerar hash da senha
    senha_hash = gerar_hash_senha(senha)

    # Inserir novo usuário
    cursor.execute('INSERT INTO usuarios (nome, username, senha) VALUES (?, ?, ?)', 
                   (nome, username, senha_hash))
    conn.commit()

    print("\nUsuário registrado com sucesso:")
    print(f"Nome: {nome}")
    print(f"Username: {username}")
    print(f"Senha (hash): {senha_hash}")
    print("-" * 30)

    conn.close()
    return True

# Execução principal
if __name__ == "__main__":
    nome = input("Entre com o nome: ")
    nome_usuario = input("Entre com o usuário: ")
    senha = input("Entre com a senha: ")

    registrar_user(nome, nome_usuario, senha)
