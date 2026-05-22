import { useEffect, useState } from "react";
import { getTerms, TermAndCondition } from "../services/termsService";

export default function Terms() {
  const [terms, setTerms] = useState<TermAndCondition[]>([]);

  useEffect(() => {
    async function fetchTerms() {
      const res = await getTerms();
      setTerms(res.data);
    }
    fetchTerms();
  }, []);

  return (
    <div>
      {terms.map(term => (
        <div key={term.id}>
          <h3>{term.title}</h3>
          <p>{term.content}</p>
        </div>
      ))}
    </div>
  );
}
