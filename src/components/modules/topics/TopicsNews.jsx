import { CardContent, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ListTopicNews from "./ListTopicNews";
import { useDispatch } from "react-redux";
import { getlistTopicNews, newsActions } from "state/modules/news/newsSlice";
import useNotification from "utils/hooks/notification";

const TopicsNews = () => {
    const [isListTopic, setIsListTopic] = useState(false);
    const dispatch = useDispatch();
    const [topic, setTopic] = useState([]);
    const [isGet, setIsGet] = useState(true);
    const [topicId, setTopicId] = useState(1);
    const { showError } = useNotification();
    useEffect(() => {
        setIsGet(true);;
        dispatch(newsActions.getlistTopicNews({
            onComplete: (error, data) => {
                setIsGet(false);
                if (!error) {
                    console.log(data.results);
                    setTopic(data.results);
                    setIsGet(false);
                    console.log(data.results);
                    return;
                }
                const errorMessages = Object.values(error).join(". ");
                return showError(errorMessages);
            }
        }));
    }, [dispatch]);
    return (isListTopic
        ? <ListTopicNews topicId={topicId} setIsListTopic={setIsListTopic} />
        : <div className="example-card-seamless mb-spacing-6">
            <div className="mb-spacing-6">
                <Grid container spacing={6}>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 1) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })   
                        }}>
                            <img alt="..." className="card-img-top" src="https://img.timviecdientu.com/2019/08/trien-vong-nganh-dien-tu-vien-thong-4.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://cdn.tgdd.vn/2020/04/GameApp/1587799989800-200x197.jpg" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Tin t???c
                            </h5>
                                <p className="card-text">
                                    Bao g???m c??c b???n tin chung ??ang ???????c
                                    quan t??m, h???i ngh???, t??? thi???n,
                                    tin t???c ??i???n l???c th??? gi???i v?? c??c b???n tin li??n quan.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 2) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            });
                        }}>
                            <img alt="..." className="card-img-top" src="https://image.sggp.org.vn/w840/Uploaded/2020/evofjasfzyr/2019_12_09/1_7_obgt.gif" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://qandme.net/images/icon-05.png" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Th??ng tin v?? s??? ki???n
                            </h5>
                                <p className="card-text">
                                    Bao g???m c??c b???n tin li??n quan ?????n
                                    th??? tr?????ng ??i???n l???c trong n?????c v??
                                    v?? c??c s??? ki???n
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 3) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://www.evn.com.vn/userfile/User/thuhatcdl/images/2019/6/khaiquatthuydien.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill" style={{ backgroundColor: "white" }}>
                                        <img alt="..." src="https://cdn2.iconfinder.com/data/icons/space-118/512/730_management_process_production_task_work_business_elements_management-512.png" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    S???n xu???t kinh doanh
                            </h5>
                                <p className="card-text">
                                    Bao g???m c??c b???n tin li??n quan ?????n s???n xu???t
                                    kinh doang ??i???n l???c, quy m??,
                                    ngu???n ?????u t?? v?? l??nh v???c s???n xu???t.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 2) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://www.evn.com.vn/userfile/User/xuantien/images/2022/11/Anh3CPMB12112022(1).jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill" style={{ backgroundColor: "white" }}>
                                        <img alt="..." src="https://hoithaonik.com/wp-content/uploads/2018/10/icon-dau-tu-1-6.png" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    ?????u t?? x??y d???ng
                            </h5>
                                <p className="card-text">
                                    Bao g???m c??c b???n tin li??n quan ?????n ?????u t??
                                    x??y d???ng ??i???n l???c n?????c nh??,
                                    quy m??, ngu???n ?????u t?? v?? l??nh v???c ?????u t??.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 5) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://congthuong.vn/stores/news_dataimages/thanhhuong/062018/07/16/95f4c7f8fa7123a27964e35b98dddc46_1f.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://png.pngtree.com/png-vector/20191004/ourlarge/pngtree-staircase-icon-png-image_1790175.jpg" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    C??ng ngh??? v?? m??i tr?????ng
                            </h5>
                                <p className="card-text">
                                    Bao g???m c??c b???n tin li??n quan ?????n c??ng ngh??? v?? m??i 
                                    tr?????ng,
                                    h?????ng ph??t tri???n c???a doanh nghi???p ???? v?? ??ang.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                    <Grid item xl={4} lg={6}>
                        <a className="card card-box-hover-rise bg-white" onClick={() => {
                            topic.map((value,i)=>{
                                if (i === 4) {
                                    setTopicId(value.id);
                                    console.log(value.id)
                                    setIsListTopic(true);
                                }
                            })
                        }}>
                            <img alt="..." className="card-img-top" src="https://hanoimoi.com.vn/Uploads/images/phananh/2020/07/02/dien.jpg" height="257" />
                            <CardContent className="card-body-avatar px-4 pb-4">
                                <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                                    <div className="avatar-icon rounded-pill">
                                        <img alt="..." src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-lightning-button-icon-png-image_537154.jpg" height="74" width="74" />
                                    </div>
                                </div>
                                <h5 className="card-title font-weight-bold font-size-xl">
                                    Chuy???n ?????ng n??ng l?????ng
                            </h5>
                                <p className="card-text">
                                    Bao g???m c??c b???n tin li??n quan ?????n n??ng
                                    l?????ng trong ng??nh ??i???n l???c n?????c nh??,
                                    s??? ph??t tri???n c???a c??c lo???i n??ng l?????ng.
                            </p>
                                <div className="card-date text-black-50 mt-2"></div>
                            </CardContent>
                        </a>
                    </Grid>
                </Grid>
            </div>
        </div>);
};

export default TopicsNews;