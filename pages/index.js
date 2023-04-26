import { Inter } from "next/font/google";
import React from "react";
import Select from "react-select";
import style from "../styles/home.module.scss";
import { useState, useEffect, useId } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import MyComponent from "./component/loadgames";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [randomGames, setRandomGames] = useState([]);

  const loadRandomGames = async (nb) => {
    const response = await fetch(`/api/igdb/randomCard?nb=${nb}`);
    const data = await response.json();
    setRandomGames(data);
  };

  useEffect(() => {
    loadRandomGames(10); // Charger 10 jeux aléatoires lors du montage du composant
  }, []);

  const selectOption = (game) => {
    router.push(`/game/${game.value}`);
  };

  const debouncedOnChange = (value) => {
    console.log("Input value after debounce:", value);
  };
  const SearchGames = async (query) => {
    const response = await fetch(`/api/igdb/games?query=${query}`);
    const data = await response.json();
    const result = data.map((game) => ({ label: game.name, value: game.slug }));
    setOptions(result);
  };

  const HandleInput = debounce((e) => {
    debouncedOnChange(e);
    setInputValue(e);
    SearchGames(e);
  }, 800 );
  
  return (
    <>
      <main >
        <div className={style.contain}>
          <h1 className="p-2 mb-1 bg-dark text-white text-center">
            Et si vous découvriez un nouveau jeu?
          </h1>
          <Select
            instanceId={useId()}
            options={options}
            onInputChange={HandleInput}
            value={inputValue}
            onChange={selectOption}
          ></Select>
          <div className="row mt-3 justify-content-center gy-4">
            {randomGames.map((game, i) => (
              
              <div key={i} className="col-md-2">
                <div className="position-relative">
                <Link href={"game/" + `${game.slug}`}>
                <MyComponent url={game.cover.url}></MyComponent>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
