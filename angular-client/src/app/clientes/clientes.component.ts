import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente: Cliente): void {

    swal({
      title: '¿Estás seguro?',
      text: `¿Seguro que deseas eliminar el cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

          this.clienteService.delete(cliente.id).subscribe(
            response => {

              this.clientes = this.clientes.filter(cli => cli !== cliente)
              swal(
                'Cliente eliminado!',
                `Cliente ${cliente.nombre} eliminado con éxito!`,
                'success'
              );
            }
          );
      }
    });
  }


}
