import { Link } from "react-router-dom";

export default function Logo() {
  return <Link to={"/"}><img src="/assets/images/logo.jpg" alt="Bookly" width={80} /></Link>;
}
