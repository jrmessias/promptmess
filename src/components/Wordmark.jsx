// Marca "promptmess" com um paralelogramo (cor principal) atrás de "mess".
// O tamanho da fonte é herdado do elemento pai.
function Wordmark() {
  return (
    <>
      prompt
      <span className="relative inline-block px-0.5">
        <span
          aria-hidden="true"
          className="absolute inset-0 z-0 -skew-x-12 rounded-sm bg-primary"
        />
        <span className="relative z-10 text-black">mess</span>
      </span>
    </>
  )
}

export default Wordmark
