import { motion } from "motion/react";
const Index = () => {
  return (
    <main className="p-24">
      <h1 className=" text-5xl font-bold text-center mb-10">
        AI-Powered Python Tutor
      </h1>
      <p className=" tracking-wider text-lg mx-auto text-center mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tempora
        eveniet dolor illo provident beatae ratione veritatis iste nulla, ut
        dolorum corporis eos explicabo consequuntur rem. Perspiciatis illum
        culpa, laborum quos perferendis pariatur illo quibusdam voluptatum odit
        maxime! Doloremque debitis ea, vero delectus molestias numquam officiis
        ducimus cumque dolore voluptas voluptate repudiandae eum consequatur.
        Eius numquam exercitationem cupiditate saepe, quae at itaque provident
        vel iusto esse ipsam. Unde beatae nihil eius nesciunt, odio deserunt
        dolore harum. Recusandae id quae corrupti quasi vel labore possimus
        reprehenderit voluptatem quo fugit eos eaque illum atque, ducimus
        quaerat laboriosam dolores veritatis ratione beatae praesentium ab
        suscipit minus voluptates! Nostrum quia cum quae beatae ad sed ut
        laudantium, tenetur amet obcaecati repudiandae! Recusandae, non facere
        adipisci id sunt tempore beatae officiis minus velit nesciunt corporis
        ipsa repellendus esse quisquam neque quaerat! Libero eos ipsam esse
        amet, quas magnam corporis aspernatur perferendis reprehenderit placeat
        fugit error atque et dolor dicta, facere, consequuntur ratione modi
        blanditiis adipisci nostrum perspiciatis ad! Molestias perferendis cum
        explicabo neque error aspernatur ullam minus non nesciunt vitae
        laudantium harum laboriosam exercitationem illum voluptatum quidem
        dolorum, mollitia libero, sapiente, culpa dicta dolorem! Alias sed
        eligendi quas eum maxime dolorem tempore ab maiores illo quidem ducimus
        sint ea explicabo, laboriosam ad adipisci dicta officia voluptates
        eveniet accusantium, deleniti vero, nisi repellat laborum. Possimus
        recusandae magni, laboriosam excepturi reiciendis non aliquam odit cum
        distinctio voluptatem quia sit doloremque. Quidem dolorum excepturi ad
        iusto. Ipsam pariatur aspernatur soluta debitis consectetur enim magnam
        quaerat! Quisquam, quam fugiat nostrum quidem aliquam a ullam nihil
        inventore alias incidunt doloremque maxime repudiandae accusamus enim
        odit autem illo eum accusantium. Nulla esse non delectus ipsa quia
        facere mollitia eum earum minima porro quae natus laboriosam dolorum
        dolore facilis, hic quisquam officiis nemo iste quibusdam quasi aliquid
        tempore? Est nesciunt minima harum excepturi, libero eos facere
        cupiditate mollitia dolorem qui numquam, impedit a nam itaque
        voluptatibus laboriosam eum dolor natus labore pariatur suscipit vel.
        Laborum qui a esse debitis placeat eligendi cumque. Dolorum ipsam saepe
        voluptatum neque amet maiores laboriosam, illum nobis eligendi ullam est
        exercitationem distinctio odio quia, hic voluptates cupiditate
        voluptatem velit perspiciatis excepturi autem mollitia at. Ex reiciendis
        quaerat autem omnis rem soluta ut quod minus minima, deserunt quia eius
        quas ab nemo accusamus quo tempora explicabo, unde, illo quibusdam dicta
        laborum ratione eaque? Voluptates, ab cupiditate! Aspernatur consequatur
        ratione corrupti, eligendi et ullam nihil earum consectetur veritatis
        unde est sit impedit aperiam esse voluptatibus minus sapiente quibusdam,
        ad minima cum. Doloremque itaque rerum ea animi quisquam? At delectus,
        dolorum aut saepe quos exercitationem, eligendi voluptates totam a
        repudiandae officiis, ab sequi rem expedita praesentium labore magnam
        omnis nam molestiae! Ea quas numquam quidem alias repellendus ratione,
        eligendi ut est itaque officiis expedita laboriosam autem dolorum eaque
        non quisquam, velit soluta possimus tempora ullam quam quaerat ab illum
        laborum! Necessitatibus harum excepturi quod architecto nihil? Laborum
        nobis reiciendis, reprehenderit aperiam repellat esse quam rerum sed,
        consectetur beatae id minus repudiandae tempora blanditiis laboriosam,
        voluptate veritatis non repellendus qui exercitationem.
      </p>
      <motion.button
        initial={{ scale: 0 }}
        whileInView={{
            scale:1
        }}
       
        className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mx-auto block p-2.5 text-white font-semibold rounded-md"
      >
       <a href="/ask"> Continue to App</a>
      </motion.button>
    </main>
  );
};

export default Index;
