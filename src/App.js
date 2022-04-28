import { useEffect, useState } from "react";
import styles from "./AccountMaster.module.css";

const DesignMaster = () => {
    const [bcost, setBcost] = useState("");
    const [wcost, setWcost] = useState("");
    const [lcost, setLcost] = useState("");
    const [dcost, setDcost] = useState("");
    const [pcost, setPcost] = useState("");
    const [mu, setMU] = useState("");
    const [calPrice, setCalPrice] = useState(0);
    const [beforeMU, setBeforeMU] = useState(0);

    useEffect(() => {
        totalHandler();
    }, [bcost, wcost, lcost, dcost, pcost]);
    useEffect(() => {
        calcHandler();
    }, [beforeMU, mu]);
    const totalHandler = () => {
        setBeforeMU(
            parseInt(bcost) +
                parseInt(wcost) +
                parseInt(lcost) +
                parseInt(dcost) +
                parseInt(pcost)
        );
    };
    const calcHandler = () => {
        setCalPrice((beforeMU * 100) / (100 - parseInt(mu)));
        console.log("running");
    };
    return (
        <div className={styles["main"]}>
            <div className={styles["form-main"]}>
                <form className={styles["form"]}>
                    <div className={styles["form-group"]}>
                        <h2>Basic Cloth Cost</h2>
                        <input
                            type="number"
                            name="bcost"
                            value={bcost}
                            placeholder="Basic Cost"
                            onChange={(e) => setBcost(e.target.value)}
                            className={`${styles["input-text"]}`}
                            style={{ marginRight: "10%" }}
                            required
                        />
                        <h2>Work Cost</h2>

                        <input
                            type="number"
                            name="wcost"
                            value={wcost}
                            placeholder="Work Cost"
                            onChange={(e) => setWcost(e.target.value)}
                            className={`${styles["input-text"]}`}
                            style={{ marginRight: "10%" }}
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <h2>Lace Cost</h2>

                        <input
                            type="number"
                            name="lcost"
                            value={lcost}
                            placeholder="Lace Cost"
                            onChange={(e) => setLcost(e.target.value)}
                            className={`${styles["input-text"]}`}
                            style={{ marginRight: "10%" }}
                            required
                        />
                        <h2>Diamond/Stone Cost</h2>

                        <input
                            type="number"
                            name="dcost"
                            value={dcost}
                            placeholder="Diamond Cost"
                            onChange={(e) => setDcost(e.target.value)}
                            className={`${styles["input-text"]}`}
                            style={{ marginRight: "10%" }}
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <h2>Packing Cost</h2>
                        <input
                            type="number"
                            name="pcost"
                            value={pcost}
                            placeholder="Packing Cost"
                            onChange={(e) => setPcost(e.target.value)}
                            className={`${styles["input-text"]}`}
                            style={{ marginRight: "10%" }}
                            required
                        />
                        <h2>MU</h2>
                        <input
                            type="number"
                            name="mu"
                            value={mu}
                            placeholder="Enter MU"
                            onChange={(e) => setMU(e.target.value)}
                            className={`${styles["input-text"]}`}
                            style={{ marginLeft: "10%" }}
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <h2>Total before MU</h2>
                        <input
                            type="text"
                            name="beforeMU"
                            value={
                                isNaN(beforeMU) ? "Total before MU" : beforeMU
                            }
                            // placeholder="Calculated Price"
                            onChange={(e) =>
                                setBeforeMU(parseInt(e.target.value))
                            }
                            disabled
                            className={`${styles["input-text"]}`}
                            required
                            style={{
                                width: "20%",
                                alignSelf: "center",
                                margin: "50px 0 50px 0",
                                textAlign: "center",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        />
                        <h2>Total after MU</h2>
                        <input
                            type="text"
                            name="calPrice"
                            value={
                                isNaN(calPrice) ? "Calculated Price" : calPrice
                            }
                            // placeholder="Calculated Price"
                            onChange={(e) =>
                                setCalPrice(parseInt(e.target.value))
                            }
                            disabled
                            className={`${styles["input-text"]}`}
                            required
                            style={{
                                width: "20%",
                                alignSelf: "center",
                                margin: "50px 0 50px 0",
                                textAlign: "center",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default DesignMaster;
