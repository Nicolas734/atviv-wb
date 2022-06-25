import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState } from 'react';
import M from 'materialize-css';
import "../listagens/listagens.css"
import axios from 'axios';


export default function Listagens(props){

    useEffect(() => { 
        M.AutoInit();
    }, [])


    return(
        <div className='containerlistagem'>
            <h2 className='title'> Listagens de Consumo </h2>
                <div className="row">
                <div className="col s12">
                    <ul className="tabs-swipe-demo tabs tabsConsumo">
                        <li className="tab col s2"><a href="#test-swipe-1">Cli.Consumo Valor</a></li>
                        <li className="tab col s2"><a href="#test-swipe-2">Cli.Maior Qtd</a></li>
                        <li className="tab col s2"><a href="#test-swipe-3">Cli.Menor Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-4">Prod/Serv Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-5">Consumo Genero</a></li>
                    </ul>
                </div>

                {/* 1. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade. */}

                    <div id="test-swipe-1" className="col s12"> 
                        <form>
                            <div>
                                <table className='responsive-table centered'>

                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Valor Gasto</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Nicolas</td>
                                            <td>338.432.888-04</td>
                                            <td>3200.00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Natália</td>
                                            <td>748.253.956-08</td>
                                            <td>3000.00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Raniel</td>
                                            <td>362.321.673-02</td>
                                            <td>2800.00</td>
                                        </tr>    
                                        <tr>
                                            <td>4</td>
                                            <td>Rodrigo</td>
                                            <td>338.432.888-04</td>
                                            <td>2500.00</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Rafael</td>
                                            <td>868.571.132-09</td>
                                            <td>2300.00</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </form>
                    </div>

                {/* 2. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor. */}

                        <div id="test-swipe-2" className="col s12"> 
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Nicolas</td>
                                            <td>338.432.888-04</td>
                                            <td>320</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Natália</td>
                                            <td>748.253.956-08</td>
                                            <td>280</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Raniel</td>
                                            <td>362.321.673-02</td>
                                            <td>260</td>
                                        </tr>    
                                        <tr>
                                            <td>4</td>
                                            <td>Rodrigo</td>
                                            <td>338.432.888-04</td>
                                            <td>250</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Rafael</td>
                                            <td>868.571.132-09</td>
                                            <td>230</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Gerson</td>
                                            <td>120.389.402-12</td>
                                            <td>200</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Pedro</td>
                                            <td>431.831.094-02</td>
                                            <td>189</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Matheus</td>
                                            <td>771.822.124-62</td>
                                            <td>179</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Daniel</td>
                                            <td>834.132.194-32</td>
                                            <td>159</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Roger</td>
                                            <td>774.252.594-22</td>
                                            <td>122</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/* 3. Listagem dos 10 clientes que menos consumiram produtos ou serviços. */}

                    <div id="test-swipe-3" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td>1</td>
                                            <td>Givago</td>
                                            <td>338.432.888-04</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>hueiby</td>
                                            <td>748.253.956-08</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Patricélia</td>
                                            <td>362.321.673-02</td>
                                            <td>7</td>
                                        </tr>    
                                        <tr>
                                            <td>4</td>
                                            <td>Rogéria</td>
                                            <td>338.432.888-04</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Rafaela</td>
                                            <td>868.571.132-09</td>
                                            <td>9</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Geferson</td>
                                            <td>120.389.402-12</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Lucia</td>
                                            <td>431.831.094-02</td>
                                            <td>11</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Dewid</td>
                                            <td>771.822.124-62</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Dario</td>
                                            <td>020.443.520-01</td>
                                            <td>13</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Rogerio</td>
                                            <td>578.043.260-09</td>
                                            <td>14</td>
                                        </tr>                      
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/*4. Listagem geral dos serviços ou produtos mais consumidos. */}

                    <div id="test-swipe-4" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td>8</td>
                                            <td>Baton</td>
                                            <td>Baton</td>
                                            <td>1068</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Esmalte</td>
                                            <td>Esmalte</td>
                                            <td>1006</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Pregressiva</td>
                                            <td>Pregressiva</td>
                                            <td>957</td>
                                        </tr>                   
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                {/* 5. Listagem dos serviços ou produtos mais consumidos por gênero. */}

                    <div id="test-swipe-5" className="col s12"> 
                    <form>
                            <h2 className='generoConsumoFont'><strong>Masculino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Valor do Produto/Serviço</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>    
                                        <tr>
                                            <td>8</td>
                                            <td>Corte de Cabelo</td>
                                            <td>Corte</td>
                                            <td>346</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Fazer a Barba</td>
                                            <td>Barba</td>
                                            <td>643</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Pente</td>
                                            <td>Pente</td>
                                            <td>542</td>
                                        </tr>      
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='generoConsumoFont'><strong>Feminino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Valor do Produto/Serviço</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                            <td>8</td>
                                            <td>Baton</td>
                                            <td>Baton</td>
                                            <td>20.00</td>
                                            <td>1068</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Esmalte</td>
                                            <td>Esmalte</td>
                                            <td>12.00</td>
                                            <td>1006</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Pregressiva</td>
                                            <td>Pregressiva</td>
                                            <td>200.00</td>
                                            <td>957</td>
                                        </tr>                       
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='generoConsumoFont'><strong>Não Informado</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Tipo</th>
                                        <th>Valor do Produto/Serviço</th>
                                        <th>Qtd.Consumida</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>8</td>
                                            <td>Baton</td>
                                            <td>Baton</td>
                                            <td>20.00</td>
                                            <td>1068</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Corte de Cabelo</td>
                                            <td>Corte</td>
                                            <td>15.00</td>
                                            <td>346</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Fazer a Barba</td>
                                            <td>Barba</td>
                                            <td>20.00</td>
                                            <td>643</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}