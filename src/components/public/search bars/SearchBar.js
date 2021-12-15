import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="destination-header-top">
      <input
        type="text"
        name="destination"
        id="destination_textbox"
        autoComplete="off"
        placeholder="Destino"
        onChange={(event) => {
          props.searchValue(event.target.value);
        }}
      />
    </div>
  );
}
