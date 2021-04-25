import { React, useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Col from "../../components/module/Col";

export default function index() {
  const dispatch = useDispatch();

  const { transaction } = useSelector((state) => state.transaction);

  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    dispatch(getTransaction())
      .then((res) => {
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, []);

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="transaction p-5">
        <h1>Notifications</h1>
        {empty === true && (
          <p className="empty text-center mt-5">
            You don't have any notifications.
          </p>
        )}
        {empty === false &&
          transaction.map((item, index) => {
            return (
              <div className="history-notification p-3 mt-4" key={index}>
                <div className="d-flex align-items-center">
                  <div>
                    <Image
                      src={`${
                        item.type === "Receive"
                          ? "/images/arrow-up-green.png"
                          : item.type === "Top Up"
                          ? "/images/arrow-up-green.png"
                          : "/images/arrow-up-red.png"
                      }`}
                      width={28}
                      height={28}
                      alt="Arrow Up"
                    />
                  </div>
                  <div className="detail-notification d-flex flex-column ml-2">
                    <span className="info">
                      {item.type === "Receive"
                        ? "Transfered from "
                        : item.type === "Top Up"
                        ? "Top Up from "
                        : "Transfer to "}
                      {item.fullName}
                    </span>
                    <span className="price mt-1">
                      {Rupiah(Number(item.amount))}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Col>
  );
}
