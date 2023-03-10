import React from 'react';
import Head from '../Helper/Head';
import Titulo from '../Helper/Titulo';
import Produto from './Produto';
import styles from './Produtos.module.css';
import atendimento from '../../assets/atendimento.png';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const Produtos = () => {
  const produtos = [
    {
      titulo: 'Módulo Atendimento',
      descricao:
        'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios Variados',
        'Integração Faturamento',
      ],
      src: video1,
      alt: 'imagem ou video do módulo de atendimento',
      path: 'atendimento',
      content: 'video',
    },
    {
      titulo: 'Módulo Faturamento',
      descricao:
        'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios Variados',
        'Integração Faturamento',
      ],
      src: video2,
      alt: 'imagem ou video do módulo de atendimento',
      path: 'faturamento',
      content: 'video',
    },
    {
      titulo: 'Módulo Financeiro',
      descricao:
        'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios Variados',
        'Integração Faturamento',
      ],
      src: atendimento,
      alt: 'imagem ou video do módulo de atendimento',
      path: 'financeiro',
      content: 'img',
    },
    {
      titulo: 'Módulo Estoque',
      descricao:
        'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios Variados',
        'Integração Faturamento',
      ],
      src: atendimento,
      alt: 'imagem ou video do módulo de atendimento',
      path: 'estoque',
      content: 'img',
    },
    {
      titulo: 'Módulo NFS-e',
      descricao:
        'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios Variados',
        'Integração Faturamento',
      ],
      src: atendimento,
      alt: 'imagem ou video do módulo de atendimento',
      path: 'nfse',
      content: 'img',
    },
  ];

  return (
    <>
      <Head
        title="Produtos"
        description="Lista de produtos da empresa KonsistMed."
      />
      <Titulo
        subTitulo="ESCOLHA OS MÓDULOS QUE MELHOR LHE ATENDE"
        titulo="nossas aplicações"
      />
      <section className={styles.container}>
        {produtos.map((produto, index) => (
          <Produto
            key={index}
            content={produto.content}
            src={produto.src}
            alt={produto.alt}
            titulo={produto.titulo}
            pontos={produto.pontos}
            desc={produto.descricao}
            link={produto.path}
          />
        ))}
      </section>
    </>
  );
};

export default Produtos;
