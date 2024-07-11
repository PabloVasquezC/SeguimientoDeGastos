
export const ExpenseItemForm = () => {
  return (
    <form
		 className="w-80 h-80 p-4 m-4 rounded-xl shadow-black shadow-lg  ">
      <h3 className="text-2xl font-semibold ">Añadir Nuevo Gasto</h3>
			{/* Monto */}
			<div 
			  className="flex justify-between m-2">
				<label 
					htmlFor="monto"
					className="text-2xl"
					
					>
					Monto: 
				</label>
				<input 
				  className="bg-blue-200 w-40 rounded border border-black"
					type="number" 
					name="monto" 
					id="monto" />
			</div>
			<hr />

			{/* Fecha */}
			<div 
			  className="flex  justify-between m-2">
				<label 
					htmlFor="fecha"
					className="text-2xl"
					>
					Fecha: 
				</label>
				<input 
				  className="bg-blue-200 w-40 rounded border border-black"
					type="date" 
					name="fecha" 
					id="fecha" />
				
			</div>
			<hr />

			{/* Descripción */}
			<div 
			  className="flex  justify-between flex-col m-2">
				<label 
					htmlFor="descripcion"
					className="text-2xl"
					>
					Descripción: 
				</label>
				<textarea 
					rows={5}
				  className="bg-blue-200 rounded border border-black"
					type="" 
					name="descripcion" 
					id="descripcion" />
				
			</div>
			
			
			
			
    </form>
  )
}

export default ExpenseItemForm;