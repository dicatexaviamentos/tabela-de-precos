function showContent() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content-container').classList.remove('loaded');
}
const ignorarPalavras = [
    "2ª", "SEGUNDA", "2º", "KIT", "EJETOR", "EMPUNHADEIRA", "CURVA", "VISEIRA", "TRICOLOR",
    "BONES", "CONE", "BORRACHA", "BEHA", "CARNEIRA", "CORTE", "EXPANDIDA", "GL100", "5 FAIXAS",
    "CORANTE", "FLAVINA", "ESTAMPA", "100%", "INDUSTRIALIZACAO", "INFANTIL", "18 FIOS", "METRICA",
    "REBOBINAR", "COSTURA", "TRICHE", "ALVEJADO", "ALFA FOSCA", "ABA BRANCA", "TINGIR",
    "ALFA MISTA", "AMOSTRA", "FOTOCROMIA", "GLOW", "A69 / G32", "NORMAL BRANCA", "PUXADO",
    "TEMPERATURA", "LINHA BORDAR", "CORES", "ENFRALDADO", "WACKY", "GORGURAO", "VIES NOR. 50MM",
    "22MM", "NW 1.40LG", "METALIC", "CONFECCAO", "DIVERSOS", "ABA NORMAL", "COMPRESSÃO", "BICOLOR",
];
function palavraDeveSerIgnorada(palavra) {
    return ignorarPalavras.some(palavraIgnorada => palavra.includes(palavraIgnorada));
}
function ajustarNomeProduto(nomeProduto) {
    if (nomeProduto.includes('AGULHA GALONEIRA B 63')) {
        return 'AGULHA GALONEIRA B 63';
    } else if (nomeProduto.includes('AGULHA GALONEIRA UY 128')) {
        return 'AGULHA GALONEIRA UY 128';
    } else if (nomeProduto.includes('AGULHA DP X 17')) {
        return 'AGULHA DP X 17';
    } else if (nomeProduto.includes('AGULHA ELASTIQUEIRA UY 113')) {
        return 'AGULHA ELASTIQUEIRA UY 113';
    } else if (nomeProduto.includes('AGULHA OVERLOQUE B 27')) {
        return 'AGULHA OVERLOQUE B 27';
    } else if (nomeProduto.includes('AGULHA P/ RETA CABO FINO')) {
        return 'AGULHA P/ RETA CABO FINO';
    } else if (nomeProduto.includes('AGULHA P/ RETA CABO GROS')) {
        return 'AGULHA P/ RETA CABO GROSSO';
    } else if (nomeProduto.includes('AGULHA P/BORDAR DB X K5')) {
        return 'AGULHA P/BORDAR DB X K5';
    } else if (nomeProduto.includes('AGULHA PONTA LANÇA 134 PCL')) {
        return 'AGULHA PONTA LANÇA 134 PCL';
    } else if (nomeProduto.includes('AGULHA TQ X 1')) {
        return 'AGULHA TQ X 1';
    } else if (nomeProduto.includes('AGULHA 134 SAN DOURADA')) {
        return 'AGULHA 134 SAN DOURADA';
    } else if (nomeProduto.includes('LINHA ALFA 36 5000M')) {
        return 'LINHA ALFA 36 5000M';
    } else if (nomeProduto.includes('LINHA ALFA 50 5000M')) {
        return 'LINHA ALFA 50 5000M';
    } else if (nomeProduto.includes('LINHA ALFA 80 5000M')) {
        return 'LINHA ALFA 80 5000M';
    } else if (nomeProduto.includes('LINHA P/ BORDAR ALFA')) {
        return 'LINHA P/ BORDAR ALFA';
    } else if (nomeProduto.includes('LINHA P/ BORDAR BETA')) {
        return 'LINHA P/ BORDAR BETA';
    } else if (nomeProduto.includes('NW CORTADO')) {
        return 'NW CORTADO (20MM,25MM,100MM) BRANCO E PRETO';
    } else if (nomeProduto.includes('FITILHO DE NW')) {
        return 'FITILHO DE NW GR100 BRANCO E PRETO';
    } else if (nomeProduto.includes('FECHO DE CONTATO 50MM')) {
        return 'FECHO DE CONTATO 50MM BRANCO E PRETO';
    } else if (nomeProduto.includes('FECHO DE CONTATO 25MM')) {
        return 'FECHO DE CONTATO 25MM BRANCO E PRETO';
    } else if (nomeProduto.includes('FECHO DE CONTATO 16MM')) {
        return 'FECHO DE CONTATO 16MM BRANCO E PRETO';
    } else if (nomeProduto.includes('FECHO DE CONTATO 100MM')) {
        return 'FECHO DE CONTATO 100MM BRANCO E PRETO';
    } else if (nomeProduto.includes('E.V.A 3.5MM D40')) {
        return 'E.V.A 3.5MM D40 (VERIFICAR CORES)';
    } else if (nomeProduto.includes('AGULHA PONTA LANÇA INF. 134 LR')) {
        return 'AGULHA PONTA LANÇA INF. 134 LR';
    } else if (nomeProduto.includes('ABA ALFA')) {
        return 'ABA ALFA (VERIFICAR MODELOS E VALORES)';
    } else if (nomeProduto.includes('AGULHA B 64 GB')) {
        return 'AGULHA B 64 GB INTERLOQUE';
    } else if (nomeProduto.includes('AGULHA DO X 558')) {
        return 'AGULHA DO X 558';
    } else if (nomeProduto.includes('BOTAO PINO ALUM.')) {
        return 'BOTAO PINO ALUM. CORES';
    } else if (nomeProduto.includes('EL. CARRETEL 100M ALFA 7MM 0100')) {
        return 'EL. CARRETEL 100M ALFA 7MM BRANCO';
    } else if (nomeProduto.includes('FIVELA PASSANTE 18MM')) {
        return 'FIVELA PASSANTE 18MM';
    } else if (nomeProduto.includes('ILHOS OVAL NIQUELADO')) {
        return 'ILHOS OVAL 250 UN';
    } else if (nomeProduto.includes('ILHOS 108/60 FIVELA')) {
        return 'ILHOS 108/60 FIVELA';
    } else if (nomeProduto.includes('ILHOS 45 COM ARRUELA')) {
        return 'ILHOS 45 COM ARRUELA';
    } else if (nomeProduto.includes('LINHA BONDED NYL 40    ALFA 250G')) {
        return 'LINHA BONDED NYL ALFA 250G';
    } else if (nomeProduto.includes('LINHA BONDED NYL 40    ALFA 80G')) {
        return 'LINHA BONDED NYL ALFA 80G';
    } else if (nomeProduto.includes('LINHA BONDED NYL 60    ALFA 80G')) {
        return 'LINHA BONDED NYL ALFA 80G';
    } else if (nomeProduto.includes('LINHA NYLON 40 ALFA 250G')) {
        return 'LINHA NYLON ALFA 250G';
    } else if (nomeProduto.includes('LINHA NYLON 40 ALFA 80G')) {
        return 'LINHA NYLON ALFA 80G';
    } else if (nomeProduto.includes('REGULADOR PANDA 1 PINO')) {
        return 'REGULADOR PANDA 1 PINO (VERIFICAR CORES)';
    } else {
        
        return nomeProduto;
    }
}
function printContent() {
    var printButton = document.getElementById("printButton");
    printButton.style.display = "none"; // Oculta o botão de impressão durante a impressão
    window.print();
    printButton.style.display = "block"; // Exibe o botão de impressão após a impressão
}
window.onload = function () {
    // Mostrar o elemento de carregamento ao carregar a página
    document.getElementById('loader').style.display = 'flex';
    setTimeout(function () {
        fetch('padr.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n').slice(8); // Ignorar cabeçalho e começar a leitura na linha 9
                // Carregar o arquivo dica.csv
                fetch('dica.csv')
                    .then(response => response.text())
                    .then(dicaData => {
                        const dicaRows = dicaData.split('\n').slice(1); // Ignorar cabeçalho
                        // Carregar o arquivo dist.csv
                        fetch('dist.csv')
                            .then(response => response.text())
                            .then(distData => {
                                const distRows = distData.split('\n').slice(1); // Ignorar cabeçalho
                                const groupedProducts = {};
                                // Agrupar os produtos por família/subfamília
                                rows.forEach(row => {
                                    const columns = row.split(';');
                                    const productName = columns[2];
                                    const productPrice = columns[3];
                                    // Procurar o nome do produto no arquivo dica.csv
                                    const dicaRow = dicaRows.find(dicaRow => {
                                        const dicaColumns = dicaRow.split(';');
                                        return dicaColumns[4] === productName;
                                    });
                                    // Procurar o nome do produto no arquivo dist.csv
                                    let distributorPrice = '---'; // Preço do distribuidor padrão
                                    const distRow = distRows.find(distRow => {
                                        const distColumns = distRow.split(';');
                                        return distColumns[2] === productName;
                                    });
                                    if (distRow) {
                                        const distColumns = distRow.split(';');
                                        distributorPrice = distColumns[3];
                                    }
                                    if (dicaRow && !palavraDeveSerIgnorada(productName)) {
                                        const dicaColumns = dicaRow.split(';');
                                        const unitOfMeasure = dicaColumns[11];
                                        const family = dicaColumns[0];
                                        const subFamily = dicaColumns[1];
                                        const familySubfamily = `${family}/${subFamily}`;
                                        // Verificar se já existe um produto com o mesmo preço de venda no grupo
                                        const existingProduct = groupedProducts[familySubfamily]?.products.find(product => product.productPrice === productPrice);
                                        // Se não houver um produto com o mesmo preço de venda, adicione-o ao grupo
                                        if (!existingProduct) {
                                            // Adicionar o produto ao grupo correspondente
                                            if (!groupedProducts[familySubfamily]) {
                                                groupedProducts[familySubfamily] = {
                                                    products: [],
                                                    unitOfMeasure: unitOfMeasure,
                                                    familySubfamily: familySubfamily
                                                };
                                            }
                                            groupedProducts[familySubfamily].products.push({
                                                productName: ajustarNomeProduto(productName), // Ajustando o nome do produto aqui
                                                productPrice: productPrice,
                                                distributorPrice: distributorPrice
                                            });
                                        } else {
                                            // Aqui adicionamos a verificação para substituir os nomes dos produtos da família/subfamília LINHAS/OVERLOQUE conforme necessário
                                            if (family === 'LINHAS' && subFamily === 'OVERLOQUE') {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('LINHA 100G OVER ALFA') && !productName.includes('0100') && !productName.includes('9900')) {
                                                        return 'LINHA 100G OVER ALFA CORES';
                                                    } else if (productName.includes('LINHA 500G OVER ALFA') && !productName.includes('0100') && !productName.includes('9900')) {
                                                        return 'LINHA 500G OVER ALFA CORES';
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'VIES ELASTICO' && (subFamily === '14MM' || subFamily === '16MM' || subFamily === '20MM' || subFamily === '25MM' || subFamily === '30MM')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('VIES EL.') && !productName.includes('BRANCO') && !productName.includes('PRETO')) {
                                                        return `VIES EL. ${subFamily} CORES`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'VIES NORMAL' && (subFamily === '14 MM' || subFamily === '16 MM' || subFamily === '20 MM' || subFamily === '25 MM' || subFamily === '27 MM'|| subFamily === '30 MM')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('VIES NOR.') && !productName.includes('BRANCO') && !productName.includes('PRETO')) {
                                                        return `VIES NOR. ${subFamily} CORES`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'SUTACHE' && (subFamily === 'CORES')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('SUTACHE ALFA') && !productName.includes('0100') && !productName.includes('9900')) {
                                                        return `SUTACHE ALFA ${subFamily} (VERIFICAR CORES)`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }

                                            if (family === 'LINHAS' && (subFamily === '10000M')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('LINHA ALFA 120 10000M') && !productName.includes('WHITE')) {
                                                        return `LINHA ALFA 120 10000M`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }

                                            if (family === 'LINHAS' && (subFamily === 'RETA')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('LINHA ALFA 120 1500J') && !productName.includes('WHITE')) {
                                                        return `LINHA ALFA 120 1500J`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'LINHAS' && (subFamily === '5000M')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('LINHA ALFA 120 5000M') && !productName.includes('WHITE')) {
                                                        return `LINHA ALFA 120 5000M`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'CADARÇO' && (subFamily === 'POLIESTER')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('CADARCO ALFA 100M') && !productName.includes('0100') && !productName.includes('9900') && !productName.includes('MESCLA')) {
                                                        return `CADARCO ALFA 100M CORES`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'CORDÕES' && (subFamily === 'PP')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('CORDAO CHAPEU 4/2') && !productName.includes('BRANCO')) {
                                                        return `CORDAO CHAPEU 4/2 CORES`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }
                                            if (family === 'VELCRO' && (subFamily === '20 MM')) {
                                                const newProductName = (productName) => {
                                                    if (productName.includes('FECHO DE CONTATO 20MM') && !productName.includes('FEMEA')) {
                                                        return `FECHO DE CONTATO 20MM BRANCO E PRETO`;
                                                    }
                                                    return productName;
                                                };
                                                existingProduct.productName = newProductName(existingProduct.productName);
                                            }


                                        }
                                    }
                                });
                                const container = document.querySelector('.content-container');

                                for (const familySubfamily in groupedProducts) {
                                    const productGroup = groupedProducts[familySubfamily];

                                    // Criar uma nova tabela para o grupo de família/subfamília
                                    const table = document.createElement('table');
                                    const tbody = document.createElement('tbody');

                                    // Adicionar uma linha para a família/subfamília
                                    const familySubfamilyRow = document.createElement('tr');
                                    const familySubfamilyCell = document.createElement('td');
                                    familySubfamilyCell.setAttribute('colspan', '4');
                                    familySubfamilyCell.textContent = productGroup.familySubfamily;
                                    familySubfamilyCell.classList.add('family-subfamily'); // Adiciona a classe .family-subfamily à célula
                                    familySubfamilyRow.appendChild(familySubfamilyCell);

                                    tbody.appendChild(familySubfamilyRow);

                                    // Adicionar o cabeçalho Produto Unid Padrão Distribuidor
                                    const headerRow = document.createElement('tr');
                                    headerRow.innerHTML = `
                                        <th>Produto</th>
                                        <th>Unid</th>
                                        <th>Padrão</th>
                                        <th>Distribuidor</th>
                                    `;
                                    tbody.appendChild(headerRow);

                                    // Adicionar linhas para cada produto na família/subfamília
                                    productGroup.products.forEach(product => {
                                        const productRow = document.createElement('tr');
                                        const distributorPrice = parseFloat(product.distributorPrice.replace(',', '.'));
                                        let productName = product.productName; // mantém o nome original do produto
                                        let productUnit = productGroup.unitOfMeasure; // mantém a unidade de medida padrão

                                        // Verifica se o nome do produto contém a palavra-chave
                                        if (productName.includes('EL. MT ALFA')) {
                                            productUnit = 'METROS'; // Atualiza a unidade de medida
                                        } else if (productName.includes('EL. RL ALFA')) {
                                            productUnit = 'UNIDADES'; // Atualiza a unidade de medida
                                        } else if (productName.includes('LINHA NYLON 0,18MM')) {
                                            productUnit = 'KILOS'; // Atualiza a unidade de medida
                                        }

                                        productRow.innerHTML = `
                                            <td>${productName}</td>
                                            <td>${productUnit}</td>
                                            <td>${parseFloat(product.productPrice.replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</td>
                                            <td>${isNaN(distributorPrice) ? '---------' : distributorPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</td>
                                        `;
                                        tbody.appendChild(productRow);
                                    });

                                    // Adicionar o tbody à tabela
                                    table.appendChild(tbody);

                                    // Adicionar a tabela ao contêiner
                                    container.appendChild(table);

                                    // Adicionar uma quebra de linha após cada grupo
                                    container.appendChild(document.createElement('br'));
                                }

                                // Agora que os dados estão prontos, oculte a animação de carregamento e mostre a tabela
                                showContent();
                            })
                            .catch(error => console.error('Erro ao carregar o arquivo dist.csv:', error));
                    })
                    .catch(error => console.error('Erro ao carregar o arquivo dica.csv:', error));
            })
            .catch(error => console.error('Erro ao carregar o arquivo padr.csv:', error));
    }, 500); // Espera 500 milissegundos antes de carregar os dados da tabela
};
function showContent() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content-container').classList.remove('loaded');
}