import { useContext } from "react";
import { CountContext } from "./Provider";

export default function useCountContext() {
    const context = useContext(CountContext);
    const { count, incrementCountHandler, decrementCountHandler} = context;

    return { count, incrementCountHandler, decrementCountHandler} ;

}