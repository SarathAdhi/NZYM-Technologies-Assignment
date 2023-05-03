import { SortFnPerson, useStore } from "@utils/store";
import React, { useState } from "react";
import TrAccordion from "../TrAccordion";
import TdRender from "../TdRender";
import clsx from "clsx";
import styles from "./Table.module.css";

const DummyTH = () => (
  <>
    <th className={styles.th_style_none} />
    <th className={styles.th_style_none} />
    <th className={styles.th_style_none} />
    <th className={styles.th_style_none} />
    <th className={styles.th_style_none} />
  </>
);

const Table: React.FC = () => {
  const [rows, setRows] = useState(10);

  const { persons: allPersons, sortData, isLoading, dataActions } = useStore();

  if (isLoading) return <h3>Loading ...</h3>;

  const tableHeadings = Object.keys(allPersons![0]);

  return (
    <div>
      <table>
        <thead>
          <tr className={styles.top_row}>
            <th className={styles.th_style_none}>Number of Rows</th>

            <DummyTH />

            <th className={styles.th_select}>
              <select
                className={styles.select}
                onChange={(e) => setRows(parseInt(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
              </select>
            </th>
          </tr>

          <tr>
            {tableHeadings.map((heading) => {
              const key = heading as keyof SortFnPerson | "address";

              if (key === "address") return;

              return (
                <th key={heading}>
                  <div className={styles.th_sub_wrapper}>
                    <span>{heading}</span>

                    {dataActions[key] && (
                      <button
                        className={styles.action_btn}
                        onClick={() => sortData(key)}
                      >
                        <img
                          src="/arrow-down.svg"
                          className={clsx(
                            dataActions[key] !== "ASC" && styles.rotate_up
                          )}
                        />
                      </button>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {allPersons?.map((person, index) => {
            if (rows < index + 1) return;

            const values = Object.entries(person);

            return (
              <TrAccordion key={person.id} address={person.address}>
                {values.map(
                  (val, index) =>
                    val[0] !== "address" &&
                    typeof val[1] !== "object" && (
                      <TdRender
                        key={person.id + index}
                        headingKey={val[0]}
                        value={val[1]}
                        fname={person["first name"]}
                        lname={person["last name"]}
                      />
                    )
                )}
              </TrAccordion>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
