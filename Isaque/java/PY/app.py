from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui'

# Banco de dados simulado (para testes)
usuarios_db = {}

# Rota para a página inicial (index)
@app.route('/')
def index():
    return render_template('index.html')

# Rota para a página de login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Verifica se o usuário existe
        if username in usuarios_db and check_password_hash(usuarios_db[username]['password'], password):
            session['username'] = username
            return redirect(url_for('perfil'))
        else:
            return "Usuário ou senha inválidos", 401

    return render_template('login.html')

# Rota para a página de cadastro
@app.route('/cadastro', methods=['GET', 'POST'])
def cadastro():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if username in usuarios_db:
            return "Usuário já existe", 400
        
        # Criptografa a senha antes de salvar
        hashed_password = generate_password_hash(password)
        usuarios_db[username] = {'password': hashed_password}
        
        return redirect(url_for('login'))

    return render_template('cadastro.html')

# Rota para a página do perfil
@app.route('/perfil')
def perfil():
    if 'username' not in session:
        return redirect(url_for('login'))
    
    username = session['username']
    return render_template('perfil.html', username=username)

if __name__ == '__main__':
    app.run(debug=True)
