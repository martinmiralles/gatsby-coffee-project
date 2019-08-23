import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              repellat illo eos laudantium. Id quaerat nesciunt facere non unde
              molestias qui ut iusto, quisquam commodi rem accusantium alias
              molestiae, voluptatibus, atque voluptas. Delectus deleniti
              officiis tempore eveniet ipsum deserunt commodi sequi magnam at
              consequatur, laboriosam magni expedita sed nesciunt possimus.
            </p>

            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
