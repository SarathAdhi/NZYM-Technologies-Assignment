import PageLayout from "@layouts/PageLayout";
import Table from "@components/Table";
import { useEffect } from "react";
import { useStore } from "@utils/store";

export default function Home() {
  const { getPersons } = useStore();

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <PageLayout title="Home" className="container">
      <Table />
    </PageLayout>
  );
}
