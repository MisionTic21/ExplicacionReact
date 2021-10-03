import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpeg";

function Index() {
  return (
    <section>
      <h1>Razas de perros</h1>
      <ul className="breedCardContainer">
        <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
        <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
        <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
      </ul>
    </section>
  );
}
export default Index;
