import "./styles.css";
import { useEffect, useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);

  const add = (subtract) => {
    if (subtract) {
      setCounter(counter - 1);
    } else {
      setCounter(counter + 1);
    }
  };
  useEffect(() => {
    console.log("counter", counter);
  }, [counter]);

  // write a function to search
  // write a function to filter by age , and comman hobby

  const data = [
    {
      id: 1,
      name: "shash",
      age: 23,
      hobby: ["coding", "anime", "movies"],
      pass: [{ maths: 90 }, { english: 30 }],
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EACsQAAICAQQBBAEEAgMAAAAAAAABAgMRBBIhMQUTQVFhcQaBkcGh8CJCUv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECIUH/2gAMAwEAAhEDEQA/APxEJAlFZMDBIAIAACSAUSCfYAQSAE1AJAEMgkBUAkAQVLEEEAEgME9DAYAAkoAkBEAkYAInASJYFScDGS2AipDLYGAqiJLYIwBBBIAjBGCQKsVZIBAAJKBKBKCIJQwSERgYLAAEiUi6RRRInBdRLbAjLBGDZwK7CDIhl2sFQquCCxRyQAh9Ey47M5MWtQkwQDLTQkgk0yFkQSgicEgJBFkidpMUaxhkqKRiaRgawrNVXnpFTWEa8s3jT9HRTT8nQq0gzrznT9GVkMHqSqRx6iPawMXXm2GbOiyDyYyi17EaiknwzBGlzxwjNGa3E5y237kNcdBcESfJFQAArYAlGmdSicEIkIlF4oojatFRpCJ0wgZVo6a1jvsrFrWqrPsdcKEl0ZU8nfVHKKywcMLoKOTpsr4+2R6MoRi5xaysr7Wf9/gYjGUOHwcd1OXnk9FmU4cDFeRbSefqpKC2rs9u+PDSPntVJTnKcet2EZrpx653yyyKkp8Mw6BUAKAADYkA0wFkQWCJS5N60ZRRvX2VK6a4m0VlmdaOqmJWK3oh0eppa8xRxURPU0mzcoWT9OL/AO+1tL845/g1ERKtfCPa8r456f8ARfi9TdHbbdqrXXnv02l/cc/ueh4vxv6f0+3U+X8zXqK48rTaWublN/DbSx+P8nB+rfOT89rY2Qr9HTUx9PT0/wDmPy/t/wBA+Pl2tplYzqnDk8vy89lHpxck5vlrpL8ipPWOus9OiyeOkfNTysJ+x63krt2hqi5Nybw+Guvk8lyyzna78TEqLUVL2eUZkt54IMtgAAAADcGK4L+oy6zjVEoyjZ8mqa9ipjSJvWc8Xyb1vBWa7KjsqPPhM7KZFjFehSztrZ51UzphYkuzUZegp8dlZSycnrfZKsz7lF7JqKcm0klk8DzeqTjU47XuWa+W3+cHX5nVOrSNQf8Aym9qPm7G247Zbtq4+jFrfHKdd6rcXY92OE2cTN75xcYRWcpc4ZgzFdoAAigAAAACQAEC0JY/BUAdCZrGRyQnjvo1Us9GmbHXXPLR21TwuzzYSwdELMI1HOx6cLfsvLUfZ5quQlZiLefYamPRWoWcLk3jdx9nzdVs/UzvaTeXg6LtZlxVcuF7tDVvK/ndQ52KtPiPP7nl71tWG8/fsaau+V1m5tP8I5jFrrzPEtkAEaAAAAAAAASAAgAABKe3kgAdFck+u/g03HGa1z9majNjpi8sm6xKtrPfBmpYWTGduY4+wkid6hnGHL5KerJrnko+yDLeAACgAAAAAAAAAAkABAAAAAAJQAFnNuDKMAKgAAAAAAAAAAAAAAAH/9k=",
    },
    {
      id: 2,
      name: "devil",
      age: 23,
      hobby: ["coding", "anime", "movies"],
      pass: [{ maths: 90 }, { english: 30 }],
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EACsQAAICAQQBBAEEAgMAAAAAAAABAgMRBBIhMQUTQVFhcQaBkcGh8CJCUv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECIUH/2gAMAwEAAhEDEQA/APxEJAlFZMDBIAIAACSAUSCfYAQSAE1AJAEMgkBUAkAQVLEEEAEgME9DAYAAkoAkBEAkYAInASJYFScDGS2AipDLYGAqiJLYIwBBBIAjBGCQKsVZIBAAJKBKBKCIJQwSERgYLAAEiUi6RRRInBdRLbAjLBGDZwK7CDIhl2sFQquCCxRyQAh9Ey47M5MWtQkwQDLTQkgk0yFkQSgicEgJBFkidpMUaxhkqKRiaRgawrNVXnpFTWEa8s3jT9HRTT8nQq0gzrznT9GVkMHqSqRx6iPawMXXm2GbOiyDyYyi17EaiknwzBGlzxwjNGa3E5y237kNcdBcESfJFQAArYAlGmdSicEIkIlF4oojatFRpCJ0wgZVo6a1jvsrFrWqrPsdcKEl0ZU8nfVHKKywcMLoKOTpsr4+2R6MoRi5xaysr7Wf9/gYjGUOHwcd1OXnk9FmU4cDFeRbSefqpKC2rs9u+PDSPntVJTnKcet2EZrpx653yyyKkp8Mw6BUAKAADYkA0wFkQWCJS5N60ZRRvX2VK6a4m0VlmdaOqmJWK3oh0eppa8xRxURPU0mzcoWT9OL/AO+1tL845/g1ERKtfCPa8r456f8ARfi9TdHbbdqrXXnv02l/cc/ueh4vxv6f0+3U+X8zXqK48rTaWublN/DbSx+P8nB+rfOT89rY2Qr9HTUx9PT0/wDmPy/t/wBA+Pl2tplYzqnDk8vy89lHpxck5vlrpL8ipPWOus9OiyeOkfNTysJ+x63krt2hqi5Nybw+Guvk8lyyzna78TEqLUVL2eUZkt54IMtgAAAADcGK4L+oy6zjVEoyjZ8mqa9ipjSJvWc8Xyb1vBWa7KjsqPPhM7KZFjFehSztrZ51UzphYkuzUZegp8dlZSycnrfZKsz7lF7JqKcm0klk8DzeqTjU47XuWa+W3+cHX5nVOrSNQf8Aym9qPm7G247Zbtq4+jFrfHKdd6rcXY92OE2cTN75xcYRWcpc4ZgzFdoAAigAAAACQAEC0JY/BUAdCZrGRyQnjvo1Us9GmbHXXPLR21TwuzzYSwdELMI1HOx6cLfsvLUfZ5quQlZiLefYamPRWoWcLk3jdx9nzdVs/UzvaTeXg6LtZlxVcuF7tDVvK/ndQ52KtPiPP7nl71tWG8/fsaau+V1m5tP8I5jFrrzPEtkAEaAAAAAAAASAAgAABKe3kgAdFck+u/g03HGa1z9majNjpi8sm6xKtrPfBmpYWTGduY4+wkid6hnGHL5KerJrnko+yDLeAACgAAAAAAAAAAkABAAAAAAJQAFnNuDKMAKgAAAAAAAAAAAAAAAH/9k=",
    },
    {
      id: 3,
      name: "god",
      age: 23,
      hobby: ["coding", "anime", "movies"],
      pass: [{ maths: 90 }, { english: 30 }],
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EACsQAAICAQQBBAEEAgMAAAAAAAABAgMRBBIhMQUTQVFhcQaBkcGh8CJCUv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECIUH/2gAMAwEAAhEDEQA/APxEJAlFZMDBIAIAACSAUSCfYAQSAE1AJAEMgkBUAkAQVLEEEAEgME9DAYAAkoAkBEAkYAInASJYFScDGS2AipDLYGAqiJLYIwBBBIAjBGCQKsVZIBAAJKBKBKCIJQwSERgYLAAEiUi6RRRInBdRLbAjLBGDZwK7CDIhl2sFQquCCxRyQAh9Ey47M5MWtQkwQDLTQkgk0yFkQSgicEgJBFkidpMUaxhkqKRiaRgawrNVXnpFTWEa8s3jT9HRTT8nQq0gzrznT9GVkMHqSqRx6iPawMXXm2GbOiyDyYyi17EaiknwzBGlzxwjNGa3E5y237kNcdBcESfJFQAArYAlGmdSicEIkIlF4oojatFRpCJ0wgZVo6a1jvsrFrWqrPsdcKEl0ZU8nfVHKKywcMLoKOTpsr4+2R6MoRi5xaysr7Wf9/gYjGUOHwcd1OXnk9FmU4cDFeRbSefqpKC2rs9u+PDSPntVJTnKcet2EZrpx653yyyKkp8Mw6BUAKAADYkA0wFkQWCJS5N60ZRRvX2VK6a4m0VlmdaOqmJWK3oh0eppa8xRxURPU0mzcoWT9OL/AO+1tL845/g1ERKtfCPa8r456f8ARfi9TdHbbdqrXXnv02l/cc/ueh4vxv6f0+3U+X8zXqK48rTaWublN/DbSx+P8nB+rfOT89rY2Qr9HTUx9PT0/wDmPy/t/wBA+Pl2tplYzqnDk8vy89lHpxck5vlrpL8ipPWOus9OiyeOkfNTysJ+x63krt2hqi5Nybw+Guvk8lyyzna78TEqLUVL2eUZkt54IMtgAAAADcGK4L+oy6zjVEoyjZ8mqa9ipjSJvWc8Xyb1vBWa7KjsqPPhM7KZFjFehSztrZ51UzphYkuzUZegp8dlZSycnrfZKsz7lF7JqKcm0klk8DzeqTjU47XuWa+W3+cHX5nVOrSNQf8Aym9qPm7G247Zbtq4+jFrfHKdd6rcXY92OE2cTN75xcYRWcpc4ZgzFdoAAigAAAACQAEC0JY/BUAdCZrGRyQnjvo1Us9GmbHXXPLR21TwuzzYSwdELMI1HOx6cLfsvLUfZ5quQlZiLefYamPRWoWcLk3jdx9nzdVs/UzvaTeXg6LtZlxVcuF7tDVvK/ndQ52KtPiPP7nl71tWG8/fsaau+V1m5tP8I5jFrrzPEtkAEaAAAAAAAASAAgAABKe3kgAdFck+u/g03HGa1z9majNjpi8sm6xKtrPfBmpYWTGduY4+wkid6hnGHL5KerJrnko+yDLeAACgAAAAAAAAAAkABAAAAAAJQAFnNuDKMAKgAAAAAAAAAAAAAAAH/9k=",
    },
  ];

  // write a function to delete
  const [updatedData, setUpdatedData] = useState(data);
  const Delete = (id) => {
    const newdata = data?.filter((filteredItem) => filteredItem?.id === id);
    setUpdatedData(newdata);
  };
  return (
    <div className="App">
      <h1>{`Counter : ${counter}`}</h1>
      <button onClick={() => add(false)}>Add</button>
      <button onClick={() => add(true)}>Sub</button>

      {updatedData?.map((item) => (
        <div className="container">
          <img src={item.img} alt="" />
          <div>NAME : {item.name}</div>
          <p>age : {item.age}</p>
          <p>
            pass : MATHS : {item.pass.maths} english : {item.pass.english}
          </p>
          <p>HOBBY : {item.hobby?.join(",")}</p>
          <button onClick={() => Delete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
