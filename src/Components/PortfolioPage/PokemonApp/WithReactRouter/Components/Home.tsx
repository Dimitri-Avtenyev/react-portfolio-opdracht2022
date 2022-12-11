import professorOak from "../assets/professor_Oak.png";

const Home = () => {
	return (
		<div style={{display:"flex"}}>
			<img src={professorOak}/>
			<div>
				<p>
					Hello there! Welcome to the world of POKEMON!
				</p>
				<p>
					My name is OAK! People call me the POKEMON PROF!
				</p>
				<p>
					This world is inhabited by creatures called POKEMON!
				</p>
				<p>
					For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.
				</p>
			</div>
		</div>
	)
}

export default Home;