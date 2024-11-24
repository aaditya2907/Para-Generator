import React, { useState } from "react";
function Card() {
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nam officiis aliquam voluptatibus, assumenda ipsam nisi nostrum cum soluta unde explicabo molestiae error odio alias sequi, sunt cumque quasi nesciunt placeat ullam facere magnam! Obcaecati earum in exercitationem dicta adipisci sapiente facilis laboriosam inventore, est quos incidunt iure laborum rem eos sunt placeat alias maxime. Magni nobis libero quia sed quo, eligendi voluptatum fugit eveniet obcaecati eius numquam. Laboriosam, dolor quo ipsum eos dolorem nisi eum consectetur, harum repellat aperiam, voluptatibus impedit quibusdam voluptate quis? Eveniet in commodi incidunt architecto, neque, reprehenderit eius vero illum magnam sapiente repudiandae dolor totam. Nisi fugit corrupti deserunt voluptatibus necessitatibus sunt, ratione eum quasi ipsam. Iste, maiores aperiam illum dicta consequatur fuga nesciunt ipsum, est ullam quisquam alias, perspiciatis voluptatem nostrum? Distinctio, nesciunt! Commodi dolorum ipsum rem minima, cum totam esse officiis consectetur ipsam perferendis iure, cupiditate assumenda voluptatibus vero itaque nemo quo aliquid sapiente voluptates vel soluta optio eligendi animi blanditiis! Voluptate dicta odio, iure voluptates in esse. Culpa autem ducimus, eius at explicabo dignissimos! Illo expedita aperiam animi veritatis nihil, soluta ad ipsum esse voluptatibus delectus hic rerum, illum necessitatibus eos sunt excepturi facere minima optio ut libero aut! Nemo cumque accusantium sapiente, nam dolorem neque similique ipsam atque, maxime voluptas eos omnis mollitia. Sit repellendus, explicabo cum laborum culpa facilis libero sunt nihil modi nam magnam, beatae impedit sapiente porro sed qui voluptate inventore fuga dolore! Odio, temporibus consectetur? Aperiam molestiae suscipit autem. Ut a ab nobis! Possimus dolore recusandae veniam error vel at earum cum maiores. Blanditiis similique quia distinctio. Corporis ab odit vero placeat itaque, necessitatibus, pariatur molestias fugiat earum mollitia nemo tempora. Eveniet illum magni quibusdam at reprehenderit assumenda voluptatum error deleniti sint tempore, nesciunt modi nemo facilis rem? Dolorum voluptates molestiae, accusantium a repudiandae debitis nihil reiciendis id dignissimos dicta officiis quod ab ipsum tenetur sint voluptate! Consequatur dolore laboriosam facilis iure incidunt esse nesciunt maiores, nihil quasi? Provident velit laudantium placeat, animi dicta obcaecati quam atque? Nihil excepturi accusantium laudantium ut optio ad voluptatibus in aspernatur repellat. Accusamus labore facilis error unde fuga aut incidunt eos maxime aliquid quis velit necessitatibus quaerat voluptates animi quae quidem exercitationem voluptatum esse, inventore fugiat in, impedit eum voluptas quas! Officiis, eligendi. Commodi nam pariatur temporibus sunt, rem error harum, sed ut aliquid, adipisci velit. Labore blanditiis, voluptas sapiente beatae et, quisquam recusandae error impedit veritatis soluta repellat itaque? Unde similique repudiandae voluptate quisquam quidem temporibus illo. Nihil vitae, magnam consectetur consequatur, sunt dolores tenetur iure dignissimos, nemo sint quod soluta deleniti. Deleniti culpa quaerat ea quae cum sit quas optio! Debitis, reprehenderit impedit perspiciatis minus sunt est pariatur sit libero atque ex voluptatem deserunt autem necessitatibus cum rerum! Quo laudantium qui nulla totam in repudiandae sapiente sint. Adipisci officiis repellat nisi magni inventore nemo architecto officia quis, ab cum pariatur? In quo accusamus illum eum, ab, quam incidunt dignissimos iure assumenda tempora doloribus! Soluta doloribus iure, nobis, iste consequatur iusto, quis dolorem dolor quo rem aspernatur adipisci at sed.";
  const [length, setLength] = useState(1);
  const [para, setPara] = useState(" ")
  return (
    <div className="flex flex-col m-5">
      <div className="flex flex-row justify-center mb-3">
        <h1 className="text-4xl font-bold">Para Generator</h1>
      </div>
      <div className="flex flex-row h-14 justify-center mb-3">
        <input
          className="px-3 border-2 border-black rounded-md w-full"
          type="text"
          placeholder="Enter Number of Words (1-500)"
          onChange={(e)=>{
            setPara(" ")
            const length = e.target.value;
            setLength(length);
          }}
        />
        <button
          className="bg-zinc-800 text-white ml-2 px-5 border-2 border-black rounded-2xl"
          onClick={() => {
            const p = text.split(' ').slice(0, length).join(' ');
            setPara(p)
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Card;
