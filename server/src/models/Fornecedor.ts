import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Usuario} from './Usuario'
import {Item} from './Item'
import {Pedido} from './Pedido'
import {Prato} from './Prato'


@Entity()
@Index("CNPJ",["CNPJ",],{unique:true})
export class Fornecedor {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

   
    @ManyToOne(type=>Usuario, Usuario=>Usuario.fornecedors, { eager: true })
    @JoinColumn({name: "IdUsuario"})
    Usuario:Usuario;
    

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    CNPJ:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100, 
        })
    Logo:string;
        

   
    @OneToMany(type=>Item, items=>items.IdFornecedor)
    items:Item[];
    
    @OneToMany(type=>Prato, pratos=>pratos.fornecedor)
    pratos:Prato[];
   
    @OneToMany(type=>Pedido, pedidos=>pedidos.IdFornecedor)
    pedidos:Pedido[];
    
}