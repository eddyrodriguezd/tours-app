function Header() {
  return (
    <section className="flying-header">
      <div className="flying-header-top">
        <div className="flying-check">
          <p>
            <input type="checkbox" id="test" />
            <label for="test">Aéreos</label>
          </p>
          <p>
            <input type="checkbox" id="test2" />
            <label for="test2">Terrestres</label>
          </p>
        </div>
        <input
          type="text"
          name=""
          id=""
          value=""
          placeholder="Fecha de Inicio"
        />
        <a href="#" className="button__link">
          Buscar
        </a>
      </div>
      <div className="flying-header-option">
        <select name="categorias" className="title-size-16">
          <option value="1">Precio</option>
          <option value="2">Más Vendido</option>
        </select>
      </div>
    </section>
  );
}

export default Header;
