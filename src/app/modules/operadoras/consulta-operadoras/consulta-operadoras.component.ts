import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-consulta-operadoras',
  templateUrl: './consulta-operadoras.component.html',
  styleUrls: ['./consulta-operadoras.component.css']
})
export class ConsultaOperadorasComponent implements OnInit {

  private source: LocalDataSource;

  settings = {
    columns: {
      registro_ans: {
        title: 'Reg. ANS',
        filter: false
      },
      cnpj: {
        title: 'CNPJ',
        filter: false
      },
      razao_social: {
        title: 'Razão Social',
        filter: false
      },
      classificacao: {
        title: 'Classificação',
        filter: false
      }
    },

    actions: {
      columnTitle: 'Ações'

    },

    mode: 'external',

    hideSubHeader: 'true',

    noDataMessage: 'Nenhuma operadora encontrada.',

    attr: {
      id: 'id'
    },

    edit: {
      editButtonContent: '<span class="icon icon-pencil"></span>'
    },

    delete: {
      deleteButtonContent: '<span class="icon icon-cross"></span>'
    }
  };

  data = [
    {
      registro_ans: "00052-9",
      cnpj: "04.644.050/0001-70",
      razao_social: "Seguro Saúde S.A.",
      classificacao: "Seguradora Especializada"
    },
    {
      registro_ans: "00302-2",
      cnpj: "	04.656.030/0001-60",
      razao_social: "	Medicina de Grupo Saúde S.A.",
      classificacao: "Medicina de Grupo"
    },
    {
      registro_ans: "00442-4",
      cnpj: "	04.356.330/0001-65",
      razao_social: "Autogestão Saúde S.A.",
      classificacao: "	Autogestão"
    },
  ];

  constructor() { }

  ngOnInit() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = ''): void {
    this.source.setFilter([
      {field: 'registro_ans', search: query},
      {field: 'cnpj', search: query},
      {field: 'razao_social', search: query},
      {field: 'classificacao', search: query},
    ], false);
  }

}
