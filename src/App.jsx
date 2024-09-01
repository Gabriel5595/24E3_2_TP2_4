import "./styles.css"

export default function Formulario() {
    return (
        <div className="formularioContainer">
            <h1>Cadastro de Produtos</h1>
            <div className="nomeProduto">
                <p>Nome do Produto</p>
                <input placeholder="informe o nome do produto" />
            </div>

            <div className="flex-row">
                <div className="precoDeVenda">
                    <p>Preço de venda</p>
                    <input placeholder="Informe o nome do produto" />
                </div>

                <div className="precoDeCusto">
                    <p>Preço de custo</p>
                    <input placeholder="Informe o nome do produto" />
                </div>
            </div>
            
            <div className="flex-row">
                <div className="fornecedor">
                    <p>Fornecedor</p>
                    <select name="fornecedor" id="fornecedor">
                        <option value="fornecedor1">Fornecedor 1</option>
                        <option value="fornecedor2">Fornecedor 2</option>
                        <option value="fornecedor3">Fornecedor 3</option>
                    </select>
                </div>
                
                <div className="categoria">
                    <p>Categoria</p>
                    <select name="fornecedor" id="fornecedor">
                        <option value="categoria1">Categoria 1</option>
                        <option value="categoria2">Categoria 2</option>
                        <option value="categoria3">Categoria 3</option>
                    </select>
                </div>
            </div>
            
            <div className="descricao">
                <p>Descrição do Produto</p>
                <textarea placeholder="Informe a descrição do produto" />
            </div>

            <button>Salvar</button>
            
        </div>
    )
}