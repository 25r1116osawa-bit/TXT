from flask import Blueprint, render_template, request


app2 = Blueprint("APP2",__name__)


@app2.route("/")
def a():
    return "インデックス2"

@app2.route("/top")
def top():
    category = request.args.get("category")
    items = [
    # ドリンク
    {"id": 1, "name": "紅茶", "price": 1000, "stock": 10, "description": "イギリス発祥の人気の紅茶シリーズ", "is_recommended": True, "category": "ドリンク"},
    {"id": 2, "name": "コーヒー", "price": 800, "stock": 15, "description": "深いコクと香りが楽しめるコーヒー", "is_recommended": True, "category": "ドリンク"},
    {"id": 3, "name": "緑茶", "price": 600, "stock": 20, "description": "日本伝統のさっぱりした味わい", "is_recommended": False, "category": "ドリンク"},
    {"id": 4, "name": "カフェラテ", "price": 1000, "stock": 11, "description": "コーヒーとミルクのバランスが絶妙", "is_recommended": True, "category": "ドリンク"},

    # スイーツ
    {"id": 5, "name": "チョコケーキ", "price": 500, "stock": 8, "description": "濃厚なチョコレートケーキ", "is_recommended": True, "category": "スイーツ"},
    {"id": 6, "name": "チーズケーキ", "price": 550, "stock": 6, "description": "しっとり濃厚なチーズケーキ", "is_recommended": False, "category": "スイーツ"},
    {"id": 7, "name": "プリン", "price": 300, "stock": 20, "description": "なめらか食感の定番スイーツ", "is_recommended": True, "category": "スイーツ"},

    # フード
    {"id": 8, "name": "サンドイッチ", "price": 700, "stock": 12, "description": "具だくさんのサンドイッチ", "is_recommended": True, "category": "フード"},
    {"id": 9, "name": "パスタ", "price": 1200, "stock": 5, "description": "本格イタリアンパスタ", "is_recommended": False, "category": "フード"},
    {"id": 10, "name": "カレー", "price": 900, "stock": 9, "description": "スパイスの効いたカレー", "is_recommended": True, "category": "フード"}
]

    filteredItem = [p for p in items if p["is_recommended"]== True][:3]
    categories = list(set([item["category"] for item in items]))
    
    if category:
        filtered = [i for i in items if i["category"] == category]
    else:
        filtered = items

    return render_template(
        "top.html",
        items=filtered,  # ← ここが超重要
        filteredItem=filteredItem,
        categories=categories
    )

