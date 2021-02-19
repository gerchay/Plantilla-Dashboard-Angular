import { Component, OnInit,  ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'descripcion', 'fecha',  'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( ) { }

  ngOnInit(): void {
    const lista: any[] = [
      { _id: '0', nombre: 'Categoria 1', descripcion: 'Descripción 1', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 2', descripcion: 'Descripción 2', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 3', descripcion: 'Descripción 3', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 4', descripcion: 'Descripción 4', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 5', descripcion: 'Descripción 5', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 6', descripcion: 'Descripción 6', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 7', descripcion: 'Descripción 7', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 8', descripcion: 'Descripción 8', fecha_creacion: 1613523894647,  },
      { _id: '0', nombre: 'categoria 9', descripcion: 'Descripción 9', fecha_creacion: 1613523894647,  },
    ]
    this.dataSource.data = lista;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue:string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //if (this.dataSource.paginator) { this.dataSource.paginator.firstPage(); }
  }

  onDelete( idElement:string ){

    Swal.fire({
      title: '¿Estas seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then(result => {
      if (result.value) {
        Swal.fire('¡Eliminado!', 'El objeto ha sido eliminado.', 'success');
        //  ----------------------------- EJEMPLO DE USO CON UN SERVICES ---------------------
        /*this. _users.deleteById( idElement ).then(() => {
          Swal.fire('¡Eliminado!', 'Su usuario ha sido eliminado.', 'success');
        }).catch((error) => {
          Swal.fire('¡Error!', 'Se produjo un error al eliminar esta publicación.', 'error');
        });*/
      }
    });

  }

}
